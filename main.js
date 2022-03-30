var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","Coding_Anmol.jpg", "Trip_photo.png" , "mom_pic.png", "papa_pic.png" ];
var names = ["Fmaily Book","Anmol Kalra", "Japji Kalra", "Kawaljeet Kalra", "Arvindpal Singh Kalra"];
var i = 0;
document.getElementById("family_member_name").innerHTML = names[0];
function update()
{
    i++;
    var numbers_of_family_member_in_array = 4
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i];
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
   // i++;
    
}
