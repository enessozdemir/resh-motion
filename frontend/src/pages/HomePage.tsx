import { useSelector } from "react-redux";
export default function HomePage() {
  const { currentUser } = useSelector((state: any) => state.user);
  return (
    <div className="container mx-auto py-20 px-5 sm:px-0 min-h-screen">
      Welcome {currentUser?.name}
    </div>
  );
}
