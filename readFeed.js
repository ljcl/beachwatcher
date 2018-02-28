function readFeed(beach, cb) {
  if (beach !== undefined) {
    const beachInfo = {
      title: beach.title,
      advice: beach['bw:data']['bw:advice']['#'],
      patrolinfo: beach['bw:data']['bw:patrolinfo']['#'],
      bsg: beach['bw:data']['bw:bsg']['#'],
      bsgcomment: beach['bw:data']['bw:bsgcomment']['#'],
      starrating: beach['bw:data']['bw:starrating']['#'],
      datesample: beach['bw:data']['bw:datesample']['#']
    };

    const regex = {
      rainfall: /Rainfall:\s([0-9]+)mm/,
      max: /maximum temperature:\s([0-9]+)<sup>/,
      ocean: /Ocean temperature:\s+([0-9]+)<sup>/,
      hightide: /High tide:\s(\d*\.?\d*)\smetres/,
      lowtide: /Low tide:\s(\d*\.?\d*)\smetres/
    };

    Object.keys(regex).forEach(i => {
      const match = beach.description.match(regex[i]);
      if (match !== null) beachInfo[i] = match[1];
    });

    cb(null, beachInfo);
  } else {
    cb(null, null);
  }
}

module.exports = readFeed;
