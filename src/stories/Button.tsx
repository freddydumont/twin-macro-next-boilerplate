import tw from 'twin.macro';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

const SIZES = {
  small: tw`text-xs py-2.5 px-4`,
  medium: tw`px-5 py-3 text-sm`,
  large: tw`px-6 py-3 text-base`,
};

const COLORS = {
  primary: tw`text-white bg-[#1ea7fd]`,
  secondary: tw`text-gray-700 bg-transparent shadow-[rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset]`,
};

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      css={[
        tw`font-bold border-0 rounded-[3em] cursor-pointer inline-block leading-none`,
        primary ? COLORS.primary : COLORS.secondary,
        SIZES[size],
      ]}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};