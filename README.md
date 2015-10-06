#Cov_Localstorage_ORM

## Usage

    var student = new Cov('student');
    
    student.init({
        id: "",
        name: "",
        classes: ""
    });

### create

    student.create({
        name: 'longyi',
        classes: 'class1'
    });

### find

    student.findOne({
        name: "longyi",
        classes: "class1"
    })
    
    student.findAll({
        name: "longyi"
    })

    
### update

    student.update({
        name: "tom"
    }, {
        class: "class2"
    })
    
    student.updateAll({
        class: "class1"
    }, {
        class: "1班"
    })
    
### remove

    student.remove({
        id: 0
    })
    
    student.remove({
        name: 'tom'
    })