function Cov(tablename) {
    var column = [];
    var model = {};

    this.init = function(initModel) {
        model = initModel;
        for (m in model) {
            column.push(m);
        }
    }

    this.create = function(data) {
        var ram = [];
        if (localStorage.getItem(tablename)) {
            ram = JSON.parse(localStorage.getItem(tablename));
        }
        for (m in data) {
            model[m] = data[m]
        }
        if (!model.id) {
            model.id = ram.length;
        }
        ram.push(model);
        localStorage.setItem(tablename, JSON.stringify(ram));
    }


    this.findOne = function(data) {
        var ram = [];
        var count = 0;
        var mc = 0;
        for (cc in data) {
            count++;
        }
        ram = JSON.parse(localStorage.getItem(tablename));
        for (i = 0; i < ram.length; i++) {
            mc = 0;
            for (m in data) {
                if (data[m] == ram[i][m]) {
                    mc++;
                }
                if (mc == count) {
                    return {
                        error: false,
                        data: ram[i]
                    }
                }
            }

        }
        return {
            error: true
        }
    }

    this.findAll = function(data) {
        var ram = [];
        var collect = [];
        var count = 0;
        var mc = 0;
        for (cc in data) {
            count++;
        }
        ram = JSON.parse(localStorage.getItem(tablename));
        for (i = 0; i < ram.length; i++) {
            mc = 0;
            for (m in data) {
                if (data[m] == ram[i][m]) {
                    mc++;
                }
                if (mc == count) {
                    collect.push(ram[i]);
                }
            }

        }
        if (collect.length != 0) {
            return {
                error: false,
                data: collect
            }
        }
        return {
            error: true
        }
    }


    this.update = function(data, update) {
        var ram = [];
        var count = 0;
        var mc = 0;
        for (cc in data) {
            count++;
        }
        ram = JSON.parse(localStorage.getItem(tablename));
        for (i = 0; i < ram.length; i++) {
            mc = 0;
            for (m in data) {
                if (data[m] == ram[i][m]) {
                    mc++;
                }
                if (mc == count) {
                    for (m in update) {
                        ram[i][m] = update[m]
                    }
                    localStorage.setItem(tablename, JSON.stringify(ram));
                    return {
                        error: false
                    }
                }
            }

        }
        throw new Error('not find item to change');
        return {
            error: true
        }
    }

    this.updateAll = function(data, update) {
        var ram = [];
        var count = 0;
        var mc = 0;
        var state = false;
        for (cc in data) {
            count++;
        }
        ram = JSON.parse(localStorage.getItem(tablename));
        for (i = 0; i < ram.length; i++) {
            mc = 0;
            for (m in data) {
                if (data[m] == ram[i][m]) {
                    mc++;
                }
                if (mc == count) {
                    state = true;
                    for (m in update) {
                        ram[i][m] = update[m]
                    }

                }
            }

        }
        if (state) {
            localStorage.setItem(tablename, JSON.stringify(ram));
            return {
                error: false
            }
        }

        throw new Error('not find item to change');
        return {
            error: true
        }
    }

    this.remove = function(data) {
        var ram = [];
        var count = 0;
        var mc = 0;
        for (cc in data) {
            count++;
        }
        ram = JSON.parse(localStorage.getItem(tablename));
        for (i = 0; i < ram.length; i++) {
            mc = 0;
            for (m in data) {
                if (data[m] == ram[i][m]) {
                    mc++;
                }
                if (mc == count) {
                    ram.splice(i, 1);
                }
            }

        }
        localStorage.setItem(tablename, JSON.stringify(ram));
        return {
            error: false
        }
    }

}
