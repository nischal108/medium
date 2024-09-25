
export function Avatar({ authorName, size }: { authorName: string, size: "small" | "large" }) {
    const nameParts = authorName.split(" ");
    const firstNameInitial = nameParts[0]?.charAt(0) || "";
    const lastNameInitial = nameParts.length > 1 ? nameParts[nameParts.length - 1].charAt(0) : "";
  
    return (
      <div className={`relative inline-flex items-center justify-center ${size == "small" ? "w-10 h-10" : "w-12 h-12"} overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}>
        <span className={`${size == "small" ?"font-medium" : "font-bold text-2xl"} text-gray-600 dark:text-gray-300`}>
          {`${firstNameInitial}${lastNameInitial}`}
        </span>
      </div>
    );
  }