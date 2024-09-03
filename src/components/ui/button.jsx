// src/components/ui/button.jsx

export const Button = ({ variant = 'default', size = 'md', className, children, ...props }) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium focus:outline-none transition';
    const variants = {
        default: 'bg-blue-600 text-white hover:bg-blue-700',
        outline: 'border border-gray-300 text-gray-700 hover:bg-gray-100',
        ghost: 'text-gray-700 hover:bg-gray-100',
    };
    const sizes = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-5 py-2.5 text-lg',
    };

    return (
        <button className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
            {children}
        </button>
    );
};
