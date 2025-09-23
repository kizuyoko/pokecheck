import MenuItem from "./ui/MenuItem";

const Menu = () => {

  return (
    <menu className="flex gap-6 sm:pt-2">
      <MenuItem
        href='/pokemon'
        text='Pokémon'
        imageSize={24}
        iconSrc='/pokeball.svg'
      />
      <MenuItem
        href='/pokemon'
        text='Pokémon'
        imageSize={24}
        iconSrc='/pokeball.svg'
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