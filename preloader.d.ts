/// <reference path="./android.d.ts"/>

/**
 * Type used to mark Java bytes
 */
 type jbyte = number;

 type Nullable<T> = T | null;
 
 declare class Config {
     /**
      * Creates new Config instance using specified file
      * @param path path to configuration file
      */
     constructor(path: string)
 
     /**
      * Creates new Config instance using specified file
      * @param path java.io.File instance of the file to use
      */
     constructor(file: java.io.File)
 
     /**
      * Writes configuration JSON to the file
      */
     save(): void
 
     /**
      * @returns java.util.ArrayList instance containing all the names in the 
      * current config file 
      */
     getNames(): java.util.ArrayList<string>
 
     /**
      * Gets property from the config
      * 
      * Example: 
      * ```ts
      * config.get("generation.ore_copper.max_height");
      * ```
      * 
      * @param name option name, supports multi-layer calls, separated by '.'
      * @returns [[Config]] instance with current config as parent if the 
      * property is object, org.json.JSONArray instance if the property is an 
      * array, raw type if the property is of that raw type, null otherwise
      */
     get(name: string): Nullable<Config | org.json.JSONArray | boolean | number | string>
 
     /**
      * Same as [[Config.get]]
      */
     access(name: string): Nullable<Config | org.json.JSONArray | boolean | number | string>
 
     /**
      * @param name option name, supports multi-layer calls, separated by '.'
      * @return boolean config value specified in config or false if no value was
      * specified
      */
     getBool(name: string): boolean
 
     /**
      * @param name option name, supports multi-layer calls, separated by '.'
      * @return number config value specified in config or 0 if no value was
      * specified
      */
     getNumber(name: string): java.lang.Number
 
     /**
      * @param name option name, supports multi-layer calls, separated by '.'
      * @return string config value specified in config or null if no value was
      * specified
      */
     getString(name: string): Nullable<string>
 
     /**
      * Sets config value. Do not use org.json.JSONObject instances to create 
      * nested objects, consider using dot-separated names instead
      * @param name option name, supports multi-layer calls, separated by '.'
      * @param value value, may be org.json.JSONArray instance, 
      * org.json.JSONObject instance or raw data type
      */
     set(name: string, value: org.json.JSONObject | boolean | number | string): boolean
 
     /**
      * @param name option name, supports multi-layer calls, separated by '.'
      * @returns editable [[Config.ConfigValue]] instance that can be used to 
      * manipulate this config option separately
      */
     getValue(name: string): Config.ConfigValue
 
     /**
      * Ensures that config has all the properties the data pattern contains, if
      * not, puts default values to match the pattern
      * @param data string representation of data pattern
      */
     checkAndRestore(data: string): void
 
     /**
      * Ensures that config has all the properties the data pattern contains, if
      * not, puts default values to match the pattern
      * @param data javascript object representing the data patterncheckAndRestore
      */
     checkAndRestore(data: object): void
 
     /**
      * Ensures that config has all the properties the data pattern contains, if
      * not, puts default values to match the pattern
      * @param data org.json.JSONObject instance to be used as data pattern
      */
     checkAndRestore(data: org.json.JSONObject): void
 }
 
 
 declare namespace Config {
     /**
      * Class representing config value with its path withing Config object
      */
     class ConfigValue {
         /**
          * Sets config value and saves configuration file
          * @param value value, may be org.json.JSONArray instance, 
          * org.json.JSONObject instance or raw data type
          */
         set(value: org.json.JSONObject | boolean | number | string): void
 
         /**
          * @returns config value, result is the same as the result of 
          * [[Config.get]] call
          */
         get(): Nullable<Config | org.json.JSONArray | boolean | number | string>
 
         /**
          * @returns readable config value name representation along with class 
          * name
          */
         toString(): string
     }
 }
 
 /**
  * Java object of the mod, contains some useful values and methonds
  */
 declare var __mod__: java.lang.Object
 
 /**
  * Mod name
  */
 declare var __name__: string
 
 /**
  * Full path to the mod's directory, ends with "/"
  */
 declare var __dir__: string
 
 /**
  * Main mod configuration manager, settings are stored in config.json file. For 
  * more information about config.json, see {@page Mod Configuration Files}
  */
 declare var __config__: Config
 
 /**
  * Full path to current Horizon pack directory
  */
 declare var __packdir__: string;
 
 /**
  * @returns PreloaderAPI level, default is 1
  */
 declare function getLevel(): number
 
 declare function onLoaded(): void
 
 declare function onModLoaded(): void
 
 declare function onCallback(name: string, args: Object[]): void
 
 declare function setupCallbacks(executable: any): void
 
 /**
  * Writes message to the log, using specified log prefix
  * Prefix of the message = PRELOADER
  * @param message message to be logged
 */
 declare function log(message: string): void
 
 /**
  * Show toast with text message
  * And writes message to the log, using specified log prefix
  * Prefix of the message = PRELOADER-PRINT
  * @param message message to be logged
 */
 declare function print(str: string): void
 
 
 declare namespace Resources {
 
     function addRuntimePack(typeStr: string, name: string): string
 
     function getAllResourceDirectories(): string[]
 
     function getAllResourceDirectoriesPaths(): string[]
 
     function searchFilesInDir(result: Array<string>, baseDir: java.io.File, file: java.io.File, regex: string): void
 
     function getAllMatchingResourcesInDir(_directory: Object, regex: string): string[]
 
     function getAllMatchingResourcesInPath(_directory: Object, regex: string): string[]
 
     function getAllMatchingResources(regex: string): string[]
 
     function getResourcePathNoVariants(path: string): java.io.File | null
 
     function getResourcePath(path: string): string | null
 
 }
 
 declare namespace Callback {
 
     /**
      * Adds callback function for the specified callback name. Most of native
      * events can be prevented using [[Game.prevent]] call.
      * @param name callback name, should be one of the pre-defined or a custom
      * name if invoked via [[Callback.invokeCallback]]
      * @param func function to be called when an event occures
      */
     function addCallback(name: string, func: Function, priority: number): void
 
     /**
      * Invokes callback with any name and up to 10 additional parameters. You
      * should not generally call pre-defined callbacks until you really need to
      * do so. If you want to trigger some event in your mod, use your own
      * callback names
      * @param name callback name
      */
     function invokeCallback(name: string, o1?: any, o2?: any, o3?: any, o4?: any, o5?: any, o6?: any, o7?: any, o8?: any, o9?: any, o10?: any): void
 
 }
