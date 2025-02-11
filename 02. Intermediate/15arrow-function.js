setTimeout(() => {
  console.log("hello");
  setTimeout(() => {
    console.log("Hey");
    setTimeout(() => {
      console.log("NAMASTEY");
      setTimeout(() => {
        console.log("hi");
        setTimeout(() => {
          console.log("Bonjour");
        }, 2000);
      }, 2000);
    }, 2000);
  }, 2000);
}, 2000);
