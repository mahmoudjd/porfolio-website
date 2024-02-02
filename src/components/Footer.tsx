interface Props {
  name: string;
}

const Footer = ({ name }: Props) => {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <p>&copy; 2024 {name}. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
