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
        classes: "class2"
    })
    
    student.updateAll({
        classes: "class1"
    }, {
        classes: "class2"
    })
    
### remove

    student.remove({
        id: 0
    })
    
    student.remove({
        name: 'tom'
    })