const data = [
  {
    markdown: `
      # JS Based API
      You can use JS based API with Markdown too 😁
    `,
  },
  [
    {
      markdown: `
        # This is how you define the data object

        ![JS API](images/js-api1.png)
      `,
    },
    {
      markdown: `
        # This is how you initialize the slides

        ![JS API](images/js-api2.png)
      `,
    },
  ],
];

const slide = new Swift({
  selector: '#js-api',
  data: data,
  allowDarkTheme: true,
  slideNumbers: true,
  zoomedOutView: true,
});

slide.init();
