# Worley Noise

![Preview](https://user-images.githubusercontent.com/25326579/105619135-668b8d80-5dce-11eb-8366-0cc769e922b9.png)

- Distribute random points
- For each pixel choose its color based on the distance to the nth-closest point

\* In this implementation I use the first closest point. At first, I tryed to store all distances in an array, to then sort it and pick it Nth index point to determine the color of the pixel. However, somehow nothing worked, resulting in some weird result, as you can see below:

![first-try-image](https://user-images.githubusercontent.com/25326579/105619288-af901180-5dcf-11eb-9830-6d7622dd89e3.png)

![second-try-image](https://user-images.githubusercontent.com/25326579/105619286-adc64e00-5dcf-11eb-8552-06be7db495c3.png)