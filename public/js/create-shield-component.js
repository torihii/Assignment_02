AFRAME.registerComponent('create-shield-component', {
    schema: {},
    init : function() {
        const Context_AF = this;
     

        Context_AF.el.addEventListener('click', function(event) {
            console.log("click");
           
            Context_AF.createshield();

            
        });
    },
    createshield : function() {
        const Context_AF = this;

        let shieldElem = document.createElement('a-entity');
        shieldElem.setAttribute('obj-model', {obj:'/assets/models/EggSandwich.obj'});
        shieldElem.setAttribute('position', {x:2, y:3, z:-4});
        shieldElem.setAttribute('scale',{x:0, y:0, z:0});
        
      
        
    
    }
});