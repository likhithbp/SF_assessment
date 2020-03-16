import axios from "axios";

export default class Search {
  
  async getResults() {
    try {
      const resRep = await axios(
        `http://www.mocky.io/v2/5df917f5300000d45688a1b4`
      );
      const resCust = await axios(
        `http://www.mocky.io/v2/5df8fc57300000d45688a10e`
      );
      this.result = resRep.data;
      this.resultCust = resCust.data;

      this.assignmentofRepresentative();
    } catch (Error) {
      alert(Error);
    }
  }

  sortingofRepresentative() {
    let customerObjects = this.RefineRepresentatives();

    for (let i = 0; i < customerObjects.length; i++) {
      customerObjects[i].representative.sort(function(a, b) {
        return a.range - b.range;
      });
    }

    return customerObjects;
  }
  
  RefineRepresentatives() {
    let representatives = this.result;
    let customers = this.resultCust;
    let custObj = [];

    for (let i = 0; i < customers.length; i++) {
      let customerLatitude = customers[i].LATITUDE;
      let customerLongitude = customers[i].LONGITUDE;
      custObj[i] = new customerDetails(customers[i].NAME);
      for (let j = 0; j < representatives.length; j++) {
        let RepsLocation = representatives[j].location.split(",");

        let RepsLatitude = RepsLocation[0];
        let RepsLongitude = RepsLocation[1];

        let range = this.haversine(
          customerLatitude,
          customerLongitude,
          RepsLatitude,
          RepsLongitude
        );
        if (range <= 100) {
          let Repdata = {
            name: representatives[j].name,
            phone: representatives[j].phone,
            email: representatives[j].email,
            range: range
          };
          custObj[i].representative.push(Repdata);
        }
      }
    }

    return custObj;
  }

  haversine() {
    var radians = Array.prototype.map.call(arguments, function(deg) {
      return (deg / 180.0) * Math.PI;
    });
    var lat1 = radians[0],
      lon1 = radians[1],
      lat2 = radians[2],
      lon2 = radians[3];
    var R = 6372.8; // km
    var dLat = lat2 - lat1;
    var dLon = lon2 - lon1;
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    var c = 2 * Math.asin(Math.sqrt(a));
    return R * c;
  }

  assignmentofRepresentative() {
    let sortedReps = this.sortingofRepresentative();
    const assignedRepsMap = new Map();
    let customers = this.resultCust;
    let result = [];
    for (let i = 0; i < 15; i++) {
      let repsArray = sortedReps[i].representative;
      result[i] = new Opportunities();
      let companyObj = {
        name: customers[i].NAME,
        address: customers[i].ADDRESS,
        contact: customers[i].CONTACT
      };
      result[i].company = companyObj;

      let RepresentativeObj = null;
      for (let j = 0; j < repsArray.length; j++) {
        if (!assignedRepsMap.has(repsArray[j].name)) {
          RepresentativeObj = {
            name: repsArray[j].name,
            email: repsArray[j].email,
            phone: repsArray[j].phone
          };

          assignedRepsMap.set(repsArray[j].name, "assigned");
          result[i].representative = RepresentativeObj;
          break;
        }
      }
    }

    return result;
  }
}

class customerDetails {
  constructor(name) {
    this.name = name;
    this.representative = [];
  }
}

class Opportunities {
  constructor() {
    (this.representative = {}), (this.company = {});
  }
}
