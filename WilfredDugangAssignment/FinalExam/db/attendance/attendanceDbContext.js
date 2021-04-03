const low = require('lowdb');
const FileAsync = require('lowdb/adapters/FileAsync');
const path = require('path');

const adapter = new FileAsync(path.join(__dirname, 'db.json'));

class EventsDatabaseContext {
  constructor (collectionName) {
    this.collectionName = collectionName;
    this.dbContext = low(adapter).then(context => {
      context.defaults({ [collectionName]: [] }).write();
      return context;
    });
  }

  async getByEventId (eventId) {
    const context = await this.dbContext;

    return context
      .get(this.collectionName)
      .filter({'eventId': eventId })
      .value() || [];
  }

  async getByMemberId (memberId) {
    const context = await this.dbContext;

    return context
      .get(this.collectionName)
      .filter({'memberId': memberId })
      .value() || [];
  }

  async insert (data = {}) {
    const context = await this.dbContext;

    context
      .get(this.collectionName)
      .push(data)
      .write();
  }

}

module.exports = EventsDatabaseContext;
