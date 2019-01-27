

//Clicking on the black pawns

// $('#firstBlackPawn').click(function(){
//   $(this).addClass('pulse');
//   console.log('bubucela');
//   if($(this).parent().attr('id') === '01'){
//     console.log('satania');
//     $('#02').click(function(){
//       $('#01').html('');
//       $('#02').append('<img src="Chess Images/blackPeon.png" alt="" class="figureSize" id="firstBlackPawn">');
//     });
//   };
// });

// $('#secondBlackPawn').click(function(){
//   $(this).addClass('pulse');
// });

// $('#thirdBlackPawn').click(function(){
//   $(this).addClass('pulse');
// });

// $('#fourthBlackPawn').click(function(){
//   $(this).addClass('pulse');
// });

// $('#fifthBlackPawn').click(function(){
//   $(this).addClass('pulse');
// });

// $('#sixthBlackPawn').click(function(){
//   $(this).addClass('pulse');
// });

// $('#seventhBlackPawn').click(function(){
//   $(this).addClass('pulse');
// });

// $('#eighthBlackPawn').click(function(){
//   $(this).addClass('pulse');
// });



let firstPawn = {
  alive: true,
  color: 'black',
  type: 'pawn',
  position: {x:0, y:1},
  image: 'Chess Images/blackPeon.png'
};
