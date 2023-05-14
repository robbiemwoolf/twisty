# [Twisty](https://twisty.vercel.app/)

## Simple application to be used with the classic [Twister playmat](https://www.amazon.com/Hasbro-98831-Twister-Game/dp/B008J87PVC/ref=pd_lpo_sccl_1/147-4435786-3183913?pd_rd_w=u5pNr&content-id=amzn1.sym.116f529c-aa4d-4763-b2b6-4d614ec7dc00&pf_rd_p=116f529c-aa4d-4763-b2b6-4d614ec7dc00&pf_rd_r=3BPCXAKYKG0SQP6HVRTH&pd_rd_wg=NddFJ&pd_rd_r=f9d1d7ff-0d33-4e0e-b0fe-60945f27f575&pd_rd_i=B008J87PVC&psc=1)

Click the spinner to reveal the randomly chosen color and body part. After two and half seconds the spinner will reset and resuming spinning. Click again for the next move.

Upon clicking the spinner I generate a random number that will be used as the index to choose a css class from an array. I then target the event to add the chosen className. After 2500ms has elapse, I remove the added className to reset the image and animation.

<!-- ## visual helper here

graphic/gif/video

## Optimizations

What optimizations did you make in your code? E.g. refactors, performance improvements, accessibility

## Lessons Learned

What did you learn while building this project? What challenges did you face and how did you overcome them? -->

## Run Locally

Clone the project

```bash
  git clone https://github.com/robbiemwoolf/twisty
```

Go to the project directory

```bash
  cd twisty
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

## Find a bug?

If you found an issue or would like to submit an improvement to this project, please submit an issue using the issues tab above. If you would like to submit a PR with a fix, reference the issue you created!
