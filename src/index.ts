export default class TimeSpan {
	/**
	 * (this function is here just for consistency with other time units)
	 * ```js
	 * TimeSpan.milliseconds(160); // 160
	 * ```
	 */
	static milliseconds(milliseconds: number): number {
		return milliseconds;
	}
	
	/**
	 * converts seconds into milliseconds
	 * ```js
	 * TimeSpan.seconds(1);   // 1_000
	 * TimeSpan.seconds(2);   // 2_000
	 * TimeSpan.seconds(1.3); // 1_300
	 * ```
	 */
	static seconds(seconds: number): number {
		return seconds * 1000;
	}
	
	/**
	 * converts minutes into milliseconds
	 * ```js
	 * TimeSpan.minutes(1);   // 60_000
	 * TimeSpan.minutes(7.5); // 450_000
	 * TimeSpan.minutes(40);  // 2_400_000
	 * ```
	 */
	static minutes(minutes: number): number {
		return minutes * 60 * 1000;
	}
	
	/**
	 * converts hours into milliseconds
	 * ```js
	 * TimeSpan.hours(1);  // 3_600_000
	 * TimeSpan.hours(10); // 36_000_000
	 * TimeSpan.hours(24); // 86_400_000
	 * ```
	 */
	static hours(hours: number): number {
		return hours * 60 * 60 * 1000;
	}
	
	/**
	 * converts milliseconds into seconds
	 * ```js
	 * TimeSpan.toSeconds(1_000);       // 1
	 * TimeSpan.toSeconds(2_500);       // 2.5
	 * TimeSpan.toSeconds(2_500, true); // 2
	 * ```
	 */
	static toSeconds(milliseconds: number, floor: boolean = false): number {
		const value = milliseconds / 1000;
		if (floor) {
			return Math.floor(value);
		}
		
		return value;
	}
	
	/**
	 * converts milliseconds into minutes
	 * ```js
	 * TimeSpan.toMinutes(60_000);       // 1
	 * TimeSpan.toMinutes(80_000);       // 1.333...
	 * TimeSpan.toMinutes(80_000, true); // 1
	 * ```
	 */
	static toMinutes(milliseconds: number, floor: boolean = false): number {
		const value = milliseconds / 1000 / 60;
		if (floor) {
			return Math.floor(value);
		}
		
		return value;
	}
	
	/**
	 * converts milliseconds into hours
	 * ```js
	 * TimeSpan.toHours(3_600_000);       // 1
	 * TimeSpan.toHours(5_400_000);       // 1.5
	 * TimeSpan.toHours(5_400_000, true); // 1
	 * ```
	 */
	static toHours(milliseconds: number, floor: boolean = false): number {
		const value = milliseconds / 1000 / 60 / 60;
		if (floor) {
			return Math.floor(value);
		}
		
		return value;
	}
	
	/**
	 * returns number of milliseconds until `timestamp` (in milliseconds)
	 * 
	 * can return a negative number if the timestamp is in the past
	 */
	static timeUntil(timestamp: number): number {
		return timestamp - Date.now();
	}
	
	/**
	 * returns number of milliseconds since `timestamp` (in milliseconds)
	 * 
	 * can return a negative number if the timestamp is in the future
	 */
	static timeSince(timestamp: number): number {
		return Date.now() - timestamp;
	}
	
	/**
	 * returns a promise that will be resolved in `milliseconds` milliseconds
	 */
	static async sleep(milliseconds: number): Promise<void> {
		return new Promise<void>((resolve) => setTimeout(resolve, milliseconds));
	}
}

export const milliseconds = TimeSpan.milliseconds;
export const seconds = TimeSpan.seconds;
export const minutes = TimeSpan.minutes;
export const hours = TimeSpan.hours;
export const toSeconds = TimeSpan.toSeconds;
export const toMinutes = TimeSpan.toMinutes;
export const toHours = TimeSpan.toHours;
export const timeUntil = TimeSpan.timeUntil;
export const timeSince = TimeSpan.timeSince;
export const sleep = TimeSpan.sleep;
