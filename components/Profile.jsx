import React from 'react'
import Image from 'next/image'

import { Bold } from 'lucide-react'

async function getImageFromAPI(apiUrl) {
  try {
    const response = await fetch(apiUrl);
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    const blob = await response.blob(); // Convert the response to a Blob
    
    const imageURL = URL.createObjectURL(blob); // Create a URL for the Blob
    
    return imageURL; // Return the URL of the image
  } catch (error) {
    console.error('Error fetching image:', error);
    return null;
  }
}

const Profile = ({ userDisplayName, paramsUserName, userProfilePic, userEmail, userUID }) => {
  const user = [
    {
      userimg: '/assets/team/alvin.jpg',
      username: 'Alvin Dsouza',
      userclass: 'SE Comps A',
      useremail: 'alvindsouza2204@gmail.com',
      userranking: 4,
      rank: 0
    },
    
  ]
  
  const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${userUID}`; // Replace with the actual API URL
  const imageElement = document.getElementById('img-2'); // Replace with your HTML element ID
  
  getImageFromAPI(apiUrl)
  .then(imageURL => {
    if (imageURL) {
      // Set the image source
      imageElement.src = imageURL;
    }
  });

  const events = [
    {
      eventname: 'Web Dev Workshop',
      eventpreview: '/assets/team/alvin.jpg',
      eventstatus: 'Attended',
      eventTags: '50',
    },
    {
      eventname: 'C Programming Workshop',
      eventpreview: '/assets/team/alvin.jpg',
      eventstatus: 'Not Attended',
      eventTags: '25',
    },
  ]



  

  const totalEventTags = events.reduce(
    (sum, event) => sum + parseInt(event.eventTags),
    0
  )
  const LeaderBoardCard = ({username,userranking,totalEventTags,rank}) => {
    return (
      <div className="grid md:grid-cols-1 gap-8 mt-6">
<div className="relative overflow-hidden x-shadow-green feature-card p-5">
        <div className="flex justify-between items-start">
          <h5 className="font-inter font-bold text-3xl tracking-tight text-black dark:text-white">
            Name: {username}
          </h5>
          <h5 className="font-inter font-bold text-3xl tracking-tight text-black dark:text-white">
            Rank: {rank}
          </h5>
        </div>
        <p className="font-inter text-3xl text-black dark:text-gray-400">
          Tags: {totalEventTags}
        </p>
      </div>
  </div>



    );
  };
  return (
    <div>
      <div class="w-full mx-auto bg-white rounded-lg">
        {user.map((values, index) => (
          <div key={index} class="flex flex-col items-center pb-10">
            <div id='img-cont' class="image-container">
            <img src={userProfilePic} class='img-1' id='img-1'/>
            <img src="https://images.unsplash.com/photo-1682687982167-d7fb3ed8541d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=600&q=60" class='img-2' id='img-2'/>
            </div>
            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              {userDisplayName}
            </h5>
            <span class="text-sm text-[#F44336] dark:text-gray-400 uppercase ">
              {values.userclass}
            </span>
            <span class="text-sm text-gray-500 dark:text-gray-400">
              {userEmail}
            </span>
          </div>
        ))}
      </div>
      <div className='w-[75%] mx-auto'>
        <div className="grid md:grid-cols-2 gap-8 mt-6 justify-center">
          <div className="relative overflow-hidden x-shadow-yellow feature-card p-5 h-[150px] max-w-[18rem]">
            <h5 class="font-inter font-bold mb-2 text-3xl tracking-tight text-[#FFCA28] dark:text-white">
              YOUR TAGS
            </h5>

            <p className="font-inter text-3xl text-black dark:text-gray-400">
              <strong className="font-bold">{totalEventTags}</strong> Tags
            </p>
            <div>
              <Image
                src="/assets/MyProfile/image_2023-08-01_153529169-removebg-preview 1.png"
                alt="Profile Image"
                className='absolute bottom-1 right-1'
                width={150}
                height={150}
              />
            </div>
          </div>

          <div className="relative overflow-hidden x-shadow-red feature-card p-5 h-[150px] max-w-[18rem] ml-auto">
  <h5 class="font-inter font-bold mb-2 text-3xl tracking-tight text-[#F44336] dark:text-white">
    LEADERBOARD
  </h5>
  {user.map((values, index) => (
    <div key={index} class="font-inter text-3xl text-black dark:text-gray-400">
      <div className="flex justify-between items-center">
        <div>
          <p className='font-semibold'>Rank: {values.userranking}</p>
        </div>
      </div>
    </div>
  ))}
  
  <Image
    src="/assets/MyProfile/Maskgroup.png"
    alt="Leader Board Image"
    className='absolute bottom-1 right-1'
    width={75}
    height={75}
  />
</div>
        </div>
      </div>

      <div className="my-10 mx-7">
        <h1 className="text-2xl font-semibold ">Event Status</h1>
        <div className="mt-4 x-shadow-blue">
         <div class="relative overflow-x-auto rounded-xl">
  <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 rounded-xl border-2 overflow-hidden">
    <thead class="text-xl text-[#FFCA28] uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th
          scope="col"
          class="px-4 md:px-6 py-3 border-b dark:border-gray-700 md:text-lg border-r border-black"
        >
          Event name
        </th>
        <th
          scope="col"
          class="px-4 md:px-6 py-3 border-b dark:border-gray-700 md:text-lg flex justify-center items-center border-r border-black"
        >
          Preview
        </th>
        <th
          scope="col"
          class="px-4 md:px-6 py-3 border-b text-center border-r text-lg border-black"
        >
          Status
        </th>
        <th
          scope="col"
          class="px-4 md:px-6 py-3 border-b text-center text-lg border-black"
        >
          Tags
        </th>
      </tr>
    </thead>
    <tbody>
      {events.map((values, index) => (
        <tr
          key={index}
          class="bg-white border-b border-black dark:bg-gray-800 dark:border-gray-700"
        >
          <td
            scope="row"
            class="px-4 md:px-6 py-4 font-medium border-black text-[#4285F4] whitespace-nowrap dark:text-white md:text-lg border-r"
          >
            {values.eventname}
          </td>
          <td class="px-4 md:px-6 py-4 border-black dark:border-gray-700 text-lg md:flex md:justify-center md:items-center border-r">
            <Image
              src={values.eventpreview}
              alt=""
              height={40}
              width={40}
              layout="fixed"
            />
          </td>
          <td
            className={`px-4 md:px-6 py-4 border-r text-center text-lg border-b border-black dark:border-gray-700 ${
              values.eventstatus === 'Attended'
                ? 'text-[#35A853]'
                : 'text-[#F44336]'
            } dark:text-white`}
          >
            {values.eventstatus}
          </td>
          <td class="px-4 md:px-6 py-4 border-b text-center border-black dark:border-gray-700 text-[#35A853] text-lg">
            {values.eventTags}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

        </div>
      </div>


     

        {/* <div className="relative overflow-hidden x-shadow-red feature-card p-5 h-[150px] max-w-[18rem]">
  <h5 class="font-inter font-bold mb-2 text-3xl tracking-tight text-[#F44336] dark:text-white">
    LEADER BOARD
  </h5>
  {/* This is a comment-> Loop through the top 10 users */}

  {/* {user.slice(0, 10).map((values, index) => (
    <div
      key={index}
      class="font-inter text-3xl text-black dark:text-gray-400"
    >
      <p>Rank: {index + 1}</p>
      <p>{values.username}</p>
    </div>
  ))}

  <Image
    src="/assets/MyProfile/Maskgroup.png"
    alt="Leader Board Image"
    className="absolute bottom-1 right-1"
    width={75}
    height={75}
  />
</div> */} 

        {/* LeaderBoard */}
        <h1 className="mx-7 text-2xl font-semibold ">Leaderboard</h1><br/>
        <div className='w-[75%] mx-auto'>

        {/* Top three cards */}
        <div className="grid md:grid-cols-1 gap-8 mt-6">
  <div className="relative overflow-hidden x-shadow-yellow feature-card p-5 ">
    <div className="flex justify-between items-start">
      <h5 className="font-inter font-bold text-3xl tracking-tight text-black dark:text-white">
        Name: 
      </h5>
      <h5 className="font-inter font-bold text-3xl tracking-tight text-black dark:text-white">
        Rank: 1
      </h5>
    </div>
    <p className="font-inter text-3xl text-black dark:text-gray-400">
      Tags: 
    </p>
  </div>
</div>

<div className="grid md:grid-cols-1 gap-8 mt-6">
  <div className="relative overflow-hidden x-shadow-blue feature-card p-5 ">
    <div className="flex justify-between items-start">
      <h5 className="font-inter font-bold text-3xl tracking-tight text-black dark:text-white">
        Name: 
      </h5>
      <h5 className="font-inter font-bold text-3xl tracking-tight text-black dark:text-white">
        Rank: 2
      </h5>
    </div>
    <p className="font-inter text-3xl text-black dark:text-gray-400">
      Tags: 
    </p>
  </div>
</div>

<div className="grid md:grid-cols-1 gap-8 mt-6">
  <div className="relative overflow-hidden x-shadow-red feature-card p-5 ">
    <div className="flex justify-between items-start">
      <h5 className="font-inter font-bold text-3xl tracking-tight text-black dark:text-white">
        Name: 
      </h5>
      <h5 className="font-inter font-bold text-3xl tracking-tight text-black dark:text-white">
        Rank: 3
      </h5>
    </div>
    <p className="font-inter text-3xl text-black dark:text-gray-400">
      Tags: 
    </p>
  </div>
</div>



      {/* rest rank cards */}

      {Array.from({ length: 7 }, (_, index) => (
        <LeaderBoardCard key={index} rank={index + 4} />
        ))}
      </div>
   
  
        </div>



// If only single user with name, rank and Tags have to be displayed
// {user.slice(0, 3).map((values, index) => (
//   <div key={index} className="relative overflow-hidden x-shadow-yellow feature-card p-5">
//     <div className="flex justify-between items-start">
//       <h5 className="font-inter font-bold text-3xl tracking-tight text-black dark:text-white">
//         Name: {values.username}
//       </h5>
//       <h5 className="font-inter font-bold text-3xl tracking-tight text-black dark:text-white">
//         Rank: {values.userranking}
//       </h5>
//     </div>
//     <p className="font-inter text-3xl text-black dark:text-gray-400">
//       Tags: {values.rank}
//     </p>
//   </div>
// ))}

// {/* Rest of the rank cards */}
// {user.slice(3).map((values, index) => (
//   <LeaderBoardCard key={index} username={values.username} rank={values.userranking} totalEventTagsn={values.rank} />
// ))}

      
    


    
  )
}

const container = document.getElementById('img-cont');
const img_1 = document.getElementById('img-1');
const img_2 = document.getElementById('img-2');

img_1.onclick = function () {
  img_1.style.transform = 'scale(0)';
  img_2.style.transform = 'scale(1)';
  img_2.style.opacity = '1';
  img_1.style.opacity = '0';
  container.style.borderRadius = '0';
  img_2.style.borderRadius = '0';
};

img_2.onclick = function () {
  img_2.style.transform = 'scale(0)';
  img_1.style.transform = 'scale(1)';
  img_1.style.opacity = '1';
  img_2.style.opacity = '0';
};

export default Profile
