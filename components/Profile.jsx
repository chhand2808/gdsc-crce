import React from 'react'

const Profile = () => {
  const user = [
    {
      userimg: '/assets/team/alvin.jpg',
      username: 'Alvin Dsouza',
      userclass: 'SE Comps A',
      useremail: 'alvindsouza2204@gmail.com',
    },
  ]
  const events = [
    {
      eventname: 'Web Dev Workshop',
      eventpreview: '/assets/team/alvin.jpg',
      eventstatus: 'Attended',
      eventpoints: '50',
    },
    {
      eventname: 'C Programming Workshop',
      eventpreview: '/assets/team/alvin.jpg',
      eventstatus: 'Attended',
      eventpoints: '25',
    },
  ]
  return (
    <div className="mt-16 pt-10">
      <div class="w-full mx-auto bg-white rounded-lg">
        {user.map((values, index) => (
          <div key = {index} class="flex flex-col items-center pb-10">
            <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src={values.userimg} alt="User image"/>
            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              {values.username}
            </h5>
            <span class="text-sm text-[#F44336] dark:text-gray-400 uppercase ">
              {values.userclass}
            </span>
            <span class="text-sm text-gray-500 dark:text-gray-400">
              {values.useremail}
            </span>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-3">
        <div
          class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Name of the card
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">
            descriptio of the card
          </p>
        </div>

        <div
          class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Name of the card
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">
            descriptio of the card
          </p>
        </div>

        <div
          class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Name of the card
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">
            descriptio of the card
          </p>
        </div>
      </div>

      <div className="mt-5 mx-5">
        <h1 className="text-lg font-semibold ">Events</h1>

        <div class="relative overflow-x-auto">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Event name
                </th>
                <th scope="col" class="px-6 py-3">
                  Preview
                </th>
                <th scope="col" class="px-6 py-3">
                  Status
                </th>
                <th scope="col" class="px-6 py-3">
                  Points
                </th>
              </tr>
            </thead>
            <tbody>
              {events.map((values, index) => (
                <tr key={index} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {values.eventname}
                  </th>
                  <td class="px-6 py-4">
                    <img src={values.eventpreview} alt="" height={40} width={40}/>
                  </td>
                  <td class="px-6 py-4">{values.eventstatus}</td>
                  <td class="px-6 py-4">{values.eventpoints}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Profile
