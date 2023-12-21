class EnviromentRecords {
  constructor(bindings) {
    this.bindings = bindings || {};
  }
  creatdBinding(N) {
    this.bindings[N] = undefined;
  }
  setBinding(N, V) {
    this.bindings[N] = V;
  }
  hasBinding() {
    return N in this.bindings;
  }
  getBindingValue(N) {
    return this.bindings[N];
  }
}

module.exports = EnviromentRecords;
