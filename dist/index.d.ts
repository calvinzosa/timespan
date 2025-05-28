export default class TimeSpan {
    /**
     * (this function is here just for consistency with other time units)
     * ```js
     * TimeSpan.milliseconds(160); // 160
     * ```
     */
    static milliseconds(milliseconds: number): number;
    /**
     * converts seconds into milliseconds
     * ```js
     * TimeSpan.seconds(1);   // 1_000
     * TimeSpan.seconds(2);   // 2_000
     * TimeSpan.seconds(1.3); // 1_300
     * ```
     */
    static seconds(seconds: number): number;
    /**
     * converts minutes into milliseconds
     * ```js
     * TimeSpan.minutes(1);   // 60_000
     * TimeSpan.minutes(7.5); // 450_000
     * TimeSpan.minutes(40);  // 2_400_000
     * ```
     */
    static minutes(minutes: number): number;
    /**
     * converts hours into milliseconds
     * ```js
     * TimeSpan.hours(1);  // 3_600_000
     * TimeSpan.hours(10); // 36_000_000
     * TimeSpan.hours(24); // 86_400_000
     * ```
     */
    static hours(hours: number): number;
    /**
     * converts milliseconds into seconds
     * ```js
     * TimeSpan.toSeconds(1_000);       // 1
     * TimeSpan.toSeconds(2_500);       // 2.5
     * TimeSpan.toSeconds(2_500, true); // 2
     * ```
     */
    static toSeconds(milliseconds: number, floor?: boolean): number;
    /**
     * converts milliseconds into minutes
     * ```js
     * TimeSpan.toMinutes(60_000);       // 1
     * TimeSpan.toMinutes(80_000);       // 1.333...
     * TimeSpan.toMinutes(80_000, true); // 1
     * ```
     */
    static toMinutes(milliseconds: number, floor?: boolean): number;
    /**
     * converts milliseconds into hours
     * ```js
     * TimeSpan.toHours(3_600_000);       // 1
     * TimeSpan.toHours(5_400_000);       // 1.5
     * TimeSpan.toHours(5_400_000, true); // 1
     * ```
     */
    static toHours(milliseconds: number, floor?: boolean): number;
    /**
     * returns number of milliseconds until `timestamp` (in milliseconds)
     *
     * can return a negative number if the timestamp is in the past
     */
    static timeUntil(timestamp: number): number;
    /**
     * returns number of milliseconds since `timestamp` (in milliseconds)
     *
     * can return a negative number if the timestamp is in the future
     */
    static timeSince(timestamp: number): number;
    /**
     * returns a promise that will be resolved in `milliseconds` milliseconds
     */
    static sleep(milliseconds: number): Promise<void>;
}
export declare const milliseconds: typeof TimeSpan.milliseconds;
export declare const seconds: typeof TimeSpan.seconds;
export declare const minutes: typeof TimeSpan.minutes;
export declare const hours: typeof TimeSpan.hours;
export declare const toSeconds: typeof TimeSpan.toSeconds;
export declare const toMinutes: typeof TimeSpan.toMinutes;
export declare const toHours: typeof TimeSpan.toHours;
export declare const timeUntil: typeof TimeSpan.timeUntil;
export declare const timeSince: typeof TimeSpan.timeSince;
export declare const sleep: typeof TimeSpan.sleep;
