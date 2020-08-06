  
  
  var pronoun = ['the','our'];
  var adj = ['great', 'big' ];
  var noun = ['jogger','racoon'];
  var dom = [".ve", ".es"];

    for (var p=0; p<pronoun.length; p++); {

            for (var a=0; a<adj.length; a++); {
            
                    for (var n=0; n<noun.length; n++); {
                    
                            for (var d=0; d<dom.length; d++); {
                            
                                console.log(pronoun[p].concat(adj[a],noun[n],dom[d]));
                            }
                    }
            }
    };
