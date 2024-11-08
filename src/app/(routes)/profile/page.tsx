import PostsGrid from "@/components/PostsGrid";
import { CheckIcon, ChevronLeft, Settings } from "lucide-react";
import Link from "next/link";
export default function Profilepage() {
    return (
        <main>
          <section className="flex justify-between items-center">
            <button>
            <ChevronLeft />
            </button>
            <div className="font-bold flex items-center gap-2">
                my_name_is_abhi
                <div className="size-5 rounded-full bg-blue-500 inline-flex justify-center items-center text-white">
                    <CheckIcon size={16}/>
                </div>
            </div>
            <Link href={'/settings'}>
                <Settings />
            </Link>
          </section>
          <section className="mt-8 flex justify-center">
          <div className="size-48 p-2 rounded-full bg-gradient-to-tr from-ig-orange to-ig-red">
            <div className="size-44 p-2 bg-white rounded-full">
            <div className="size-40 aspect-square overflow-hidden rounded-full">
            <img className=""
          src="https://images.pexels.com/photos/17048693/pexels-photo-17048693/free-photo-of-rahman.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="profile image" />
            </div>
            </div>
            </div>
          </section>
          <section className="text-center mt-4">
            <h1 className="text-xl font-bold">Abhishek Rajendran</h1>
            <p className="text-blue-300 mt-1 mb-1">Editor</p>
            <p>
            “The problems I have with ” <br />
            Contact:abhishekonline45@gmail.com
            </p>
          </section>
          <section className="mt-4">
            <div className="flex justify-center gap-4 font-bold">
            <Link href={''}>Posts</Link>
            <Link className="text-gray-500" href={'/highlights'}>Highlights</Link>
            </div>
          </section>
          <section className="mt-4">
            <PostsGrid />
          </section>
        </main>
    );
};