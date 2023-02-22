import React from 'react'
import { AiOutlineSend } from 'react-icons/ai';
import { FiImage } from 'react-icons/fi';
import { message_store } from '../store';
const Messages = () => {
    // store calls
    const to = message_store(state => state.to);
    const send_message = message_store(state => state.send_message);
    const set_message = message_store(state => state.set_message);
    // states
    const [selectedImage, setSelectedImage] = React.useState([]);
    const [previewUrl, setPreviewUrl] = React.useState([]);
    const handleFileChange = (event) => {
      const selectFile = Array.from(event.target.files);
      setSelectedImage(selectFile);
      const newPreviewUrl = [];
      selectFile.forEach((file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          newPreviewUrl.push(reader.result);
          setPreviewUrl(newPreviewUrl);
        };
        reader.readAsDataURL(file);
      });
    };
    return (
      <>
        <div className="w-full h-full flex-col hidden pb-[.6em]  md:flex">
          <div className="h-16 border-b flex justify-between items-center w-full px-5 py-2 shadow-sm">
            <div className="flex items-center">
              <img
                className="h-10 w-10 overflow-hidden rounded-full"
                src={`https://api.dicebear.com/5.x/avataaars/svg?seed=${to.name}&size=64&`}
                alt={to.name}
              />
              <p className="font-semibold ml-3 text-slate-600">{to.name}</p>
            </div>
            <div className="flex items-center space-x-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-9 bg-slate-50 rounded-full stroke-slate-400 p-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 stroke-slate-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                />
              </svg>
            </div>
          </div>
          {/* Messages here */}
          <div className="h-full px-10 overflow-y-scroll py-4">
            <div className="text-center  my-5">
              <hr className="-mb-3" />
              <span className="text-xs text-slate-300 font-medium bg-white px-3 -mt-3">
                Wednesday, February 5
              </span>
            </div>
            <div className="w-full flex flex-start overflow-y-auto">
              <div className="max-w-[95%] sm:max-w-[75%] lg:max-w-[60%]">
                <div className="flex items-center">
                  <img
                    className="h-5 w-5 overflow-hidden rounded-full"
                    src={`https://api.dicebear.com/5.x/avataaars/svg?seed=${to.name}&size=64&`}
                    alt={to.name}
                  />
                  <p className="font-semibold ml-3 text-sm text-slate-600">
                    {to.name}{" "}
                    <span className="text-slate-400 text-xs">3:21 PM</span>
                  </p>
                </div>

                <div className="mt-3 w-full bg-slate-50 p-4 rounded-b-xl rounded-tr-xl">
                  <p className=" text-sm text-slate-500">
                    Hey all, There are many variation of passages of Lorem ipsum
                    available, but the jokily have alternation in some form , by
                    injected humor, or randomize words which don't look even
                    slightly believable.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-end mt-3">
              <div className="w-[95%] sm:w-[75%] lg:w-[60%]">
                <div className="flex items-center justify-end">
                  <p className="font-semibold mr-3 text-sm text-slate-600">
                    Me <span className="text-slate-400 text-xs">3:25 PM</span>
                  </p>

                  <img
                    className="h-5 w-5 overflow-hidden rounded-full"
                    src="https://source.unsplash.com/random/500x500/?face"
                    alt=""
                  />
                </div>

                <div className="mt-3 w-full bg-blue-500 p-4 rounded-b-xl rounded-tl-xl">
                  <p className=" text-sm text-white">
                    Hey, <br />
                    we are own hidden lake forest which is neutral lake are
                    generally found in mountain.
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center  my-5">
              <hr className="-mb-3" />
              <span className="text-xs text-slate-300 font-medium bg-white px-3 -mt-3">
                Today, 2:15 AM 5
              </span>
            </div>
            <div className="w-full flex flex-start">
              <div className="max-w-[95%] sm:max-w-[75%] lg:max-w-[60%] min-w-fit">
                <div className="flex items-center">
                  <img
                    className="h-5 w-5 overflow-hidden rounded-full"
                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnN8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500"
                    alt=""
                  />
                  <p className="font-semibold ml-3 text-sm text-slate-600">
                    Mircel Jones{" "}
                    <span className="text-slate-400 text-xs">3:21 PM</span>
                  </p>
                </div>

                <div className="mt-3 bg-slate-50 p-4 rounded-b-xl rounded-tr-xl">
                  <p className=" text-sm text-slate-500">ok, Thanks</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-5 py-3 sticky bottom-2">
            <div className="h-12 flex justify-between px-3 items-center border border-transparent bg-slate-50 border-slate-300 rounded-lg">
              <input
                type="text"
                onChange={(e) => {
                  set_message({ message: e.target.value });
                }}
                className="w-full px-3 bg-transparent outline-none placeholder:text-slate-400"
                placeholder="Type your message"
              />
              <div className="flex items-center space-x-2">
                <div className="relative isolate hover:cursor-pointer">
                  <input
                    onChange={(e) => handleFileChange(e)}
                    type="file"
                    className="w-[1.3em] h-[1em] opacity-0"
                  />
                  <FiImage className="text-[1.3rem] text-gray-400 absolute top-[1.5px] -z-10" />
                </div>
                <AiOutlineSend
                  onClick={() => {
                    send_message();
                  }}
                  className="text-[1.3rem] hover:cursor-pointer text-gray-400"
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Messages