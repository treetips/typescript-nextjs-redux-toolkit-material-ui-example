import { Color } from "@material-ui/core"
import { blue, pink, red, yellow } from "@material-ui/core/colors"
import { SvgIconProps } from "@material-ui/core/SvgIcon"
import { Home, Info, Save } from "@material-ui/icons"
import { IEnum } from "."

/**
 * Page constants
 * @author tree
 */
export class Page implements IEnum<Page> {
  /**
   * For values() array
   */
  private static _values = new Array<Page>()

  public static readonly TOP = new Page(
    1,
    "Top",
    "Top page",
    "Top page | sample",
    "Feat typescript and next.js and redux and material-ui !!",
    "/",
    Home,
    pink
  )
  public static readonly REDUX = new Page(
    2,
    "Redux",
    "Redux sample",
    "Redux sample | sample",
    "Basic redux examples with typescript-fsa and immer.",
    "/redux",
    Save,
    blue
  )
  public static readonly TODO = new Page(
    3,
    "TODO",
    "TODO sample",
    "TODO sample | sample",
    "The TODO sample application using createAsyncThunk and createEntityAdapter.",
    "/todo",
    Save,
    yellow
  )
  public static readonly ERROR = new Page(
    99,
    "Error",
    "Error",
    "Error | sample",
    "Error.",
    "/error",
    Info,
    red
  )

  /**
   * constructor
   * @param number page id
   * @param pageTitle page title
   * @param pageDescription page description
   * @param title seo title
   * @param metaDescription seo meta description
   * @param relativeUrl relative url
   * @param icon page icon
   * @param iconColor page icon color
   */
  private constructor(
    public readonly id: number,
    public readonly pageTitle: string,
    public readonly pageDescription: string,
    public readonly title: string,
    public readonly metaDescription: string,
    public readonly relativeUrl: string,
    public readonly icon: React.ComponentType<SvgIconProps>,
    public readonly iconColor: Color
  ) {
    Page._values.push(this)
  }

  /**
   * Instance array
   */
  static get values(): Page[] {
    return this._values
  }

  /**
   * @inheritdoc
   */
  equals = (target: Page): boolean => this.id === target.id

  /**
   * @inheritdoc
   */
  toString = (): string =>
    `${this.id}, ${this.pageTitle}, ${this.pageDescription}`

  /**
   * get instance
   * @param id id
   */
  static of(id: number): Page {
    const page = Page.values.filter((e) => id === e.id).find((e) => !!e)
    if (!page) {
      throw new Error(`Get instance failed. id=${id}`)
    }
    return page
  }
}
