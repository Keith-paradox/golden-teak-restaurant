
interface MenuItemProps {
  title: string;
  description: string;
}

const MenuItem = ({ title, description }: MenuItemProps) => {
  return (
    <div className="bg-cream-light p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold text-teak mb-2">{title}</h3>
      <p className="text-sage-dark">{description}</p>
    </div>
  );
};

export default MenuItem;
