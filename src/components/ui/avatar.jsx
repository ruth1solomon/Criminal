// src/components/ui/avatar.jsx

export const Avatar = ({ className, children, ...props }) => (
    <div className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-200 rounded-full ${className}`} {...props}>
        {children}
    </div>
);

export const AvatarImage = ({ src, alt, className, ...props }) => (
    <img src={src} alt={alt} className={`h-full w-full object-cover ${className}`} {...props} />
);

export const AvatarFallback = ({ children, className, ...props }) => (
    <div className={`flex items-center justify-center h-full w-full bg-gray-500 text-white ${className}`} {...props}>
        {children}
    </div>
);
