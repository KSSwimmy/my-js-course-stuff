/* 1. Write a function that takes an integer as input, 
and returns the number of bits that are equal to one in the binary representation of that number. 
You can guarantee that input is non-negative.
Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case */

var countBits = function(n) {
    //step 1: convert the number into binary.
    let conversion = (n >>> 0).toString(2); 
    //step 2: count all the ones in the binary.
    let count = 0;
    for (let i = 0; i < conversion.length; i++){ 
    if ( conversion[i].includes("1") ){ 
    count++
      } 
      console.log(conversion) 
    } //step 3: return the count.
      return count

  };

///////// ANOTHER SOLUTION /////////////////////////////////
countBits = n => n.toString(2).split('0').join('').length;
console.log(n.toString(2))
console.log(split('0'))
console.log(join('').length)


/* 2. Trolls are attacking your comment section!
A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
Your task is to write a function that takes a string and return a new string with all vowels removed.
For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
Note: for this kata y isn't considered a vowel. */


function disemvowel(str) {
    //remove vowels from a string ("a", "i", "o", "u")
    let stringy = ["This website is for losers LOL!"];
    
    str = stringy.replace(/^[aeiou]$/i, ""); 
    console.log(str)
    return str;

    }

/* 3. Make a program that filters a list of strings and returns a list with only your friends name in it.
If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

i.e.

friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
Note: keep the original order of the names in the output.*/

function friend(friends){
    //assign a var to an array of names
    
    //filter the list of names
    //if the names have 4 letters in it choose that one
    //if not then get rid of it
    const removeFriend = friends.filter(name => name.length === 4);
    
   //returns friend's name
    return removeFriend
}
    
///////// ANOTHER SOLUTION /////////////////////////////////
function friend(friends){
    // defined an empty array
    const myFriends = []
    // assigned number of friends to (friends) to get the length of friends
    const numberOfFriends = friends.length
    // loops through number of friends
    for (let i = 0; i < numberOfFriends; i++) {
      // assigned friend name to 
      const friendName = friends[i]
      // assigned isFriend to the variable friendName (friends[i]) that is the length of 4 
      const isFriend = (friendName.length === 4)
      if (isFriend) myFriends.push(friendName)
      console.log('This is const friendName',friends[i]) 
    }
    return myFriends
  }
  
///////// ANOTHER ANOTHER SOLUTION /////////////////////////////////

function friend(friends){
    //your code here
    var realFriends = [];
    for(i=0; i<friends.length; i++){
      if(friends[i].length == 4 && isNaN(friends[i])){
        realFriends.push(friends[i]);
      }
    }
    
    return realFriends
  }

/* Test.assertSimilar(friend(["Ryan", "Kieran", "Mark"]), ["Ryan", "Mark"]);
Test.assertSimilar(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]), ["Ryan"]);
Test.assertSimilar(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]), ["Jimm", "Cari", "aret"]);
Test.assertSimilar(friend(["Love", "Your", "Face", "1"]), ["Love", "Your", "Face"]); */


