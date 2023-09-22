function writeCards(names,eventName){
          const thankYouMessages=[]; for(let a=0;a< names.length;a++){
                  const name = names[a];
                        const message = `Thank you, ${name}, for the wonderful ${eventName} gift!`;
                                    thankYouMessages.push(message); 
    } return thankYouMessages;
}
function countDown()
{ let countDown=10;
          while (countDown >= 0) {
                        console.log(countDown--);
}countDown;
}
