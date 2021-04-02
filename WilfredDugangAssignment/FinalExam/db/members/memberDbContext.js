const low = require('lowdb');
const FileAsync = require('lowdb/adapters/FileAsync');
const path = require('path');

const adapter = new FileAsync('../FinalExam/db/db.json');

class MembersDatabaseContext {
  constructor (collectionName) {
    this.collectionName = collectionName;
    this.dbContext = low(adapter).then(context => {
      context.defaults({ [collectionName]: [] }).write();

      return context;
    });
  }

  async getAll () {
    const context = await this.dbContext;

    return context
      .get(this.collectionName)
      .value() || [];
  }

  async getByFilter (filter = {}) {
    const context = await this.dbContext;

    return context
      .get(this.collectionName)
      .filter(filter)
      .value();
  }

  async getByAny (propName, propValue) {
    const context = await this.dbContext;

    return context
      .get(this.collectionName)
      .find({ [propName]: propValue })
      .value() || {};
  }

  async insert (data = {}) {
    const context = await this.dbContext;

    context
      .get(this.collectionName)
      .push(data)
      .write();
  }

  async update (memberId, data = {}) {
    const context = await this.dbContext;

    context
      .get(this.collectionName)
      .find({ memberId })
      .assign(data)
      .write();
  }

  async delete (memberId) {
    const context = await this.dbContext;

    context.get(this.collectionName).remove({ memberId }).write();

  }
}

module.exports = MembersDatabaseContext;
