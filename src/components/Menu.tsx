import Image from "next/image";
import Link from "next/link";


const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: "/home.png",
        label: "Home",
        href: "/",
      },
      {
        icon: "/teacher.png",
        label: "Teacher",
        href: "/teachers",
      },
      {
        icon: "/student.png",
        label: "Students",
        href: "/students",
      },
      {
        icon: "/parent.png",
        label: "Parents",
        href: "/parents",
      },
      {
        icon: "/class.png",
        label: "Class",
        href: "/classes",
      },
      {
        icon: "/lesson.png",
        label: "Lesson",
        href: "/lesson",
      },
      {
        icon: "/exam.png",
        label: "Exams",
        href: "/exam",
      },
      {
        icon: "/assignment.png",
        label: "Assignments",
        href: "/assignments",
      },
      {
        icon: "/attendance.png",
        label: "Attendance",
        href: "/attendance",
      },
      {
        icon: "/calendar.png",
        label: "Events",
        href: "/events",
      },
      {
        icon: "/message.png",
        label: "Messages",
        href: "/messages",
      },
      {
        icon: "/announcement.png",
        label: "Announcements",
        href: "/announcements",
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: "/profile.png",
        label: "Profile",
        href: "/profile",
      },
      {
        icon: "/settings.png",
        label: "Settings",
        href: "/settings",
      },
      {
        icon: "/logout.png",
        label: "Logout",
        href: "/logout",
      },
    ]
  }
]


const Menu = () => {
  return (
    <div className="mt-4 text-sm">
      {menuItems.map((i) => (
        <div className="flex flex-col gap-2" key={i.title}>
              <span className="hidden lg:block text-gray-400 font-light my-4">
                  {i.title}
              </span>
              {i.items.map((item) => (
                <Link 
                  href={item.href}
                  key={item.label}
                  className="flex items-centre justify-center lg:justify-start gap-4 text-gray-500 py-2"
                  >
                    <Image src={item.icon} alt="" width={20} height={20} />
                    <span className="hidden lg:block">{item.label}</span>
                </Link>
              ))}
            </div>
          ))}
        </div>
  );
};

export default Menu