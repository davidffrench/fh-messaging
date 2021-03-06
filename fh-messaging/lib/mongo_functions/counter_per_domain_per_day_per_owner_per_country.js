//ts and emit are used for testing purposes
var ts;
var emit;


function map_counter_per_domain_per_day_per_owner_per_country() {
  var owner = (this.owner)?(this.owner):'Unknown';
  var country = (this.country && this.country.country_name)?(this.country.country_name):'Unknown';
  emit({domain: this.domain, ts: ts, owner: owner, country:country}, 1);
}

exports.map_counter_per_domain_per_day_per_owner_per_country = map_counter_per_domain_per_day_per_owner_per_country;
exports.setVars = function(tstamp,emitFunc) {
  ts = tstamp;
  emit = emitFunc;
};
