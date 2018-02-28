# NSW Beachwatch Fetcher

Grab beach data from environment.nsw.gov.au and save it out to individual JSON files.

These are useful to import into home-assistant and eventually graph via grafana.

XML feed used is © State of New South Wales and Office of Environment and Heritage 2018

```sh
docker run -it -v /<YOUR>/<PATH>:/usr/src/app/output ljcl/beachwatch
```
