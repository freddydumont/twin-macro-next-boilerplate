# twin-macro-next-boilerplate

Bleeding-edge frontend template featuring:

- TypeScript
- Next.js
- `twin.macro`
- Storybook (with interaction testing and test runner)
- Cypress

This template relies on Storybook for both building and testing components.

## Testing

### Storybook interaction testing

Write [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) tests directly in Storybook using the `play` function:

```typescript
LoggedIn.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const loginButton = await canvas.getByRole('button', { name: /Log in/i });
  await userEvent.click(loginButton);

  const welcome = await canvas.findByText(/welcome/i);
  await expect(welcome).toBeInTheDocument();
};
```

See [`Page.stories.tsx`](src/components/Page/Page.stories.tsx).

Run your tests:

```shell
yarn storybook:test
```

Learn more about testing with Storybook:

- [Interaction testing](https://storybook.js.org/docs/react/essentials/interactions)
- [Test runner](https://github.com/storybookjs/test-runner)

## `twin.macro` template documentation

Download this example using [degit](https://github.com/Rich-Harris/degit):

```shell
npx degit https://github.com/ben-rogerson/twin.examples/next-emotion-typescript folder-name
```

Installation instructions coming soon...

### Customization

- [View the config options →](https://github.com/ben-rogerson/twin.macro/blob/master/docs/options.md)
- [Customizing the tailwind config →](https://github.com/ben-rogerson/twin.macro/blob/master/docs/customizing-config.md)

[](#next-steps)

### Next steps

Learn how to work with twin

- [The prop styling guide](https://github.com/ben-rogerson/twin.macro/blob/master/docs/prop-styling-guide.md) - A must-read guide to level up on prop styling
- [The styled component guide](https://github.com/ben-rogerson/twin.macro/blob/master/docs/styled-component-guide.md) - A must-read guide on getting productive with styled-components

Learn more about emotion

- [Emotion’s css prop](https://emotion.sh/docs/css-prop)
- [Emotion’s css import](https://emotion.sh/docs/css-prop#string-styles)
- [Emotion’s styled import](https://emotion.sh/docs/styled)
