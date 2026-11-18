import Navbar from "./Navbar";
import UserInfo from "./UserInfo";

function HeaderRight() {
  const actionIcon = [
    { id: 1, src: "/assets/search-icon.svg", alt: "Search icon" },
    { id: 2, src: "/assets/handbag-icon.svg", alt: "Bag icon" },
    { id: 3, src: "/assets/like-icon.svg", alt: "Like icon" }
  ];

  const user = { name: "user", avatar: "/assets/user-picture.svg" };

  return (
    <div className="flex flex-col justify-between px-5">
      <div className="flex items-center gap-8">
        <Navbar actionIcon={actionIcon} />
        <UserInfo name={user.name} avatar={user.avatar} />
      </div>
    </div>
  );
}

export default HeaderRight;

/*
HeaderRight
├── div (pembungkus flex)
│   ├── Navbar        ← <nav> berisi 3 ikon (di-map)
│   └── UserInfo      ← avatar + "Hi, User"
└── DropdownMenu      ← "Category" + ikon panah
*/
