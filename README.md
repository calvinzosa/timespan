# @whathat/timespan

simple library for time span/duration utilities
```js
import TimeSpan from '@whathat/timespan';
// or
import { seconds, minutes, sleep } from '@whathat/timespan';

TimeSpan.milliseconds(160); // 160

TimeSpan.seconds(1);   // 1_000
TimeSpan.seconds(2);   // 2_000
TimeSpan.seconds(1.3); // 1_300

TimeSpan.minutes(1);   // 60_000
TimeSpan.minutes(7.5); // 450_000
TimeSpan.minutes(40);  // 2_400_000

TimeSpan.hours(1);  // 3_600_000
TimeSpan.hours(10); // 36_000_000
TimeSpan.hours(24); // 86_400_000

TimeSpan.toSeconds(1_000);       // 1
TimeSpan.toSeconds(2_500);       // 2.5
TimeSpan.toSeconds(2_500, true); // 2
//                        ^ floor the result

TimeSpan.toMinutes(60_000);       // 1
TimeSpan.toMinutes(80_000);       // 1.333...
TimeSpan.toMinutes(80_000, true); // 1

TimeSpan.toHours(3_600_000);       // 1
TimeSpan.toHours(5_400_000);       // 1.5
TimeSpan.toHours(5_400_000, true); // 1

TimeSpan.timeUntil(Date.now() + TimeSpan.seconds(10)); // 10_000
TimeSpan.timeSince(Date.now() - TimeSpan.seconds(6));  // 6_000

await TimeSpan.sleep(TimeSpan.seconds(2));
//             ^ returns a promise that will be resolved in 2s
```

# changes:

> v2.0.0
> - changed default value of `floor` parameter from `true` to `false`

> v1.0.1
> - added github repository

> v1.0.0
> - published
