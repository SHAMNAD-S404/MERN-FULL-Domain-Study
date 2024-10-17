

const player = {
    name: "Leo",
    sport: "Football",
    introduce: function() {
      console.log(`Hi, I am ${this.name} and I play ${this.sport}`);
    }
  };


   const details = player.introduce.bind(player)

   setTimeout(details,2000)