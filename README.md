###### Connect To Front-end

# **Icon, UploadButton Component**

These are Button and Icon Components in React.
Click the button!

|          |                                                             success                                                             |                                                             failed                                                              |                                                             unabled                                                             |
| :------: | :-----------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------: |
| **view** | <img src="https://user-images.githubusercontent.com/72859045/199561577-8eb89f03-7f15-4894-b222-6a9b47f5df94.gif" width="180px"> | <img src="https://user-images.githubusercontent.com/72859045/199561972-f37cbee4-4f23-49c1-8f08-7bca697c285b.gif" width="180px"> | <img src="https://user-images.githubusercontent.com/72859045/199562037-e558d446-43c2-4048-b19c-0527444fa95e.gif" width="180px"> |

<br>

## **UploadButton Component**

#### Usage

The button renders a different text (& icon) depending on the value of 'status'.

```javascript
import { UploadButton } from './components/UploadButton.js';
...

<UploadButton status={status}></UploadButton>
// <UploadButton status="idle"></UploadButton>
// <UploadButton status="pending"></UploadButton>
// <UploadButton status="resolved"></UploadButton>
// <UploadButton status="rejected"></UploadButton>
// <UploadButton status="disabled"></UploadButton>
```

#### `UploadButton` props

| Attribute |   Type   | Default |
| :-------: | :------: | :-----: |
|  status   | `string` |  idle   |

#### Supported buttons

|  status  |                                                             Button                                                              |
| :------: | :-----------------------------------------------------------------------------------------------------------------------------: |
|   idle   | <img src="https://user-images.githubusercontent.com/72859045/199574832-4c402bff-7572-48e6-9d63-c2e512ee1b70.gif" width="150px"> |
| pending  | <img src="https://user-images.githubusercontent.com/72859045/199575185-05ed59a1-8675-44dd-a8e5-231a913356d7.gif" width="150px"> |
| resolved | <img src="https://user-images.githubusercontent.com/72859045/199574749-981f4c2e-4ddc-493a-b103-ac257e53cf68.gif" width="150px"> |
| rejected | <img src="https://user-images.githubusercontent.com/72859045/199575797-2a31183c-a735-4ad4-be50-70c35c52783d.gif" width="150px"> |
| disabled | <img src="https://user-images.githubusercontent.com/72859045/199576431-dd2fba9f-a208-43f9-a853-6bde041144b6.gif" width="150px"> |

<br>

## **Icon Component**

#### Usage

The Icon renders a different icon matched type depending on the value of 'status' prop.

```javascript
import { Icon } from './Icon.js';
...

<Icon status={status}></Icon>
// <Icon status="idle"></Icon>
// <Icon status="pending"></Icon>
// <Icon status="resolved"></Icon>
// <Icon status="rejected"></Icon>
// <Icon status="disabled"></Icon>
```

#### `Icon` props

| Attribute |   Type   | Default |
| :-------: | :------: | :-----: |
|  status   | `string` |  idle   |

#### Supported icons

|  status  |                             Icon                             |
| :------: | :----------------------------------------------------------: |
|   idle   |      ![idle](./public/assets/icons/type%3Dup-arrow.svg)      |
| pending  | ![pending](./public/assets/icons/type%3Dspinner-animate.svg) |
| resolved |   ![resolved](./public/assets/icons/type%3Dcheck-mark.svg)   |
| rejected |     ![rejected](./public/assets/icons/type%3Dcross.svg)      |
| disabled |  ![disabled](./public/assets/icons/type%3Dnot-allowed.svg)   |

<!-- |status|view|
|:----:|:---:|
|idle|<img src="https://user-images.githubusercontent.com/72859045/199574832-4c402bff-7572-48e6-9d63-c2e512ee1b70.gif" width="180px">|
|pending|<img src="https://user-images.githubusercontent.com/72859045/199575185-05ed59a1-8675-44dd-a8e5-231a913356d7.gif" width="180px">|
|resolved|<img src="https://user-images.githubusercontent.com/72859045/199574749-981f4c2e-4ddc-493a-b103-ac257e53cf68.gif" width="180px">|
|rejected|<img src="https://user-images.githubusercontent.com/72859045/199575797-2a31183c-a735-4ad4-be50-70c35c52783d.gif" width="180px">|
|disabled|<img src="https://user-images.githubusercontent.com/72859045/199576431-dd2fba9f-a208-43f9-a853-6bde041144b6.gif" width="180px">| -->
