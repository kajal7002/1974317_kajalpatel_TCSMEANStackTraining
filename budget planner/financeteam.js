function Employee(id,name) {

    this.id = id;
    this.name = name;

    this.display = function() {
        document.write("<br/>")
        document.write("id is "+this.id)
        document.write("<br/>name is "+this.name);
    }
    var that = this;
    
    function dis() {
         
        document.write("<br/>Id is "+that.id);
    }       
    dis();
    
    var dis1=()=>document.write("<br/>id is in arrow function"+this.id)
    dis1();
}
