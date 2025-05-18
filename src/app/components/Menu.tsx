import MenuItem from "./ui/MenuItem";

const Menu = () => {

  return (
    <menu className="flex gap-6 sm:pt-2">
      <MenuItem
        href='/pokemon'
        text='Pokémon'
        imageSize={26}
        iconSrc='/pokeball.svg' 
      />
      <MenuItem
        href='/type'
        text='Type'
        imageSize={22}
        iconSrc='/water.png' 
      />
      <MenuItem
        href='/favorites'
        text='Favorite'
        imageSize={18}
        isFavorite
      />
    </menu>
  );
}
export default Menu;