# simple_rest_api
simple_rest_api with Nodejs MongoDB ExpressJS


This is a simple REST API.


http://localhost:4000/api/members/

Sample POST request

{
  "name": "Yoda",
  "rank": "expert"
  "active": true,
  "geometry" : {"type": "point", "coordinates": [-80.789, 25.701]}
}


GET Request - get members by coordinate data

http://localhost:4000/api/members/?lng=-80&lat=25
