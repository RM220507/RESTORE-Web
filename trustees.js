trustee_data = [
  [
    "Andrew Gwyn-Davies",
    "images/trustees/agd.png",
    "Andrew is one of our founding trustees with a love for Seaton and the Axe Valley, organising events and projects which help to lift the town and its community. <br/><br/> When he’s not volunteering with Re:store Andrew is a production manager working in the film business, often working abroad in beautiful locations!",
  ],
  [
    "Carly Dean-Tribble",
    "images/trustees/cdt.png",
    "Carly has also been with Re:store now for the last few years and has a great knowledge of the local community and all things Seaton. <br/><br/> When Carly isn’t volunteering with Re:store she’s found in one of her two local cafes in Seaton which she owns and manages. She’s kept busy with her businesses and her young boy and husband!",
  ],
  [
    "Paul Johns",
    "images/trustees/pj.png",
    "Paul has been in Seaton for many years and has seen all of his four boys grow up and go to the local schools. <br/><br/> Paul works for Seaton Town Council looking after their projects and managing the facilities in and around Seaton. <br/><br/> Paul is a key member of AVR and when he isn’t working or volunteering he’s running or planning his next running or cycling adventure.",
  ],
  [
    "Louise Tucker",
    "images/trustees/lt.jpeg",
    "Louise is one of our newer trustees and has given her time to volunteer as she loves to help people. <br/><br/> Louise works for a local architectural firm based in Seaton and when not working is bringing up her three boys and messing around in the outdoors including sea swimming.",
  ],
  [
    "Ben Stansfield",
    "images/trustees/bs.jpeg",
    "Ben has recently joined the Re:store team and brings a wealth of experience from working in South London running a similar project. Ben is currently working with another large worldwide charity and leads projects oversees through local partners. <br/><br/> Ben’s has two teenage boys who are sport mad and so he spends most of his time on the side lines of football pitches and rugby fields. <br/><br/> When he has time for himself Ben enjoys the outdoor life, kayaking, swimming or woodwork in the garden!",
  ],
  [
    "Lydia Sweetland",
    "images/trustees/ls.jpeg",
    "Lydia is the Community Matron, working from Seaton hospital and leading the nursing team going out daily to help people in their homes. <br/><br/> We are grateful to have Lydia on the team bringing a huge experience and expertise in working in the community with people in need. <br/><br/> When Lydia manages to find some free time she's often seen running or walking the dog or looking after her family.",
  ],
  [
    "Ben Tucker",
    "images/trustees/bt.jpg",
    "Ben isn’t actually a trustee but he’s been part of Re:store from the start and has stepped back from trusteeship and now works part-time as the Community Co-ordinator and Project Manager. <br/><br/> Ben loves Seaton and seeing people helped from all areas of life with whatever they are struggling with in life. <br/><br/> When not with Re:store Ben is on his bike, running or taxiing his three boys around for various clubs, groups and to friends.",
  ],
];
// load from JSON
//fetch('./data.json')
//    .then((response) => response.json())
//    .then((trustee_data));;

current_index = 1;

function next(direction) {
  image_element = document.getElementById("trustee-image");
  name_element = document.getElementById("trustee-name");
  bio_element = document.getElementById("trustee-bio");

  if (direction == -1) {
    current_index = current_index - 1;
    if (current_index < 0) {
      current_index = trustee_data.length - 1;
    }
  } else if (direction == 1) {
    current_index = (current_index + 1) % trustee_data.length;
  }

  name_element.innerText = trustee_data[current_index][0];
  image_element.src = trustee_data[current_index][1];
  bio_element.innerHTML = trustee_data[current_index][2];
}
