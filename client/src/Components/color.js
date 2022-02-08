
Array.prototype.random = function () {
    return this[Math.floor((Math.random()*this.length))];
  }

  
export const getColor = () =>{
    return 'bg-'+ ['red' ,'green', 'blue','yellow','sky','orange','amber'].random() +'-600'
}