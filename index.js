const fs = require('fs');
const schedule = require('node-schedule');
const slugify = require('slugify');

const fetchFeed = require('./fetchFeed');
const readFeed = require('./readFeed');

const sluggies = {
  repalcement: '_',
  remove: /[$*_+~.()'"!\-:@]/g,
  lower: true
};

const beachwatch = () => {
  console.log(
    'Fetching NSW Beach Data! (© State of New South Wales and Office of Environment and Heritage 2018)'
  );
  fetchFeed(
    'http://www.environment.nsw.gov.au/beachapp/OceanBulletin.xml',
    (err, res) => {
      if (err) {
        console.log(err, err.stack);
        return process.exit(1);
      } else {
        res.forEach(beach => {
          readFeed(beach, (err, resp) => {
            fs.writeFileSync(
              `./output/${slugify(beach.title, sluggies)}.json`,
              JSON.stringify(resp),
              'utf-8'
            );
          });
        });
      }
    }
  );
};

beachwatch();
var j = schedule.scheduleJob('0 */2 * * *', () => beachwatch());
