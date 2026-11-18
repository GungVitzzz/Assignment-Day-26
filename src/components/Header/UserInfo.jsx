function UserInfo({ name, avatar }) {
  return (
    <div className="flex items-center gap-4">
      <img
        src={avatar}
        alt={`Foto ${name}`}
        className="w-12 h-12 rounded-full object-cover bg-blue-100"
      />
      <span className="font-semibold text-gray-800">Hi, {name}</span>
    </div>
  );
}

export default UserInfo;
