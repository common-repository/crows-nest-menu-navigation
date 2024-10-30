=== Crow's Nest Menu Navigation ===
Contributors: seamonsterdeneb
Tags: accessibility, a11y, long menu, dropdown menu, arrow-keys, keyboard navigation
Requires at least: 3.0
Tested up to: 6.8
Requires PHP: 5.6
Stable tag: 1.9.3
License: GPLv2
License URI: https://www.gnu.org/licenses/old-licenses/gpl-2.0.html

Adds the ability for visitors using keyboard navigation on the site to use the arrow keys while in the menu. 

== Description ==
Crow's Nest Menu Navigation adds the ability for visitors using keyboard navigation on the site to use the arrow keys while in the menu. Thus, rather than tabbing all the way through all dropdowns to get through the menu, visitors can use the right and left arrow keys to see what is in the dropdowns, and then the down and up arrows to navigate to the desired item.

== Installation ==
= Prerequisites =
Before installing, be aware that this plugin will only work for your site if the menus drop down when you tab into them just like they do when you hover over them. Usually this only requires adding an identical :focus style to what may only be a :hover style in your stylesheet. It may take some hunting in the stylesheet to find the right :hover style. Once your menu drops down when you tab into it, you are ready to install Crow's Nest Menu Navigation.

= Automatic installation =
Automatic installation is the easiest option as WordPress handles everything itself. To do an automatic install of Crow's Nest Menu Navigation, log in to your WordPress dashboard, navigate to the Plugins menu and click Add New.

In the search field, type “Crow's Nest Menu Navigation” and click Search Plugins. Install the plugin by simply pressing “Install Now”.

= Post-activation =
Open the Menu Setup option in your WordPress admin menu to set the plugin up by telling it various CSS selectors it can use to find the different parts of your menu. If you are unfamiliar with this process, you might want to get a developer to do this part for you, or go through some CSS Selector tutorials before trying this. Some basic instructions and examples are provided in the setup screen.

After you click Save, you should be able to navigate your menus with the keyboard arrow keys. 

= Accessibility considerations =
It's important to make clear who this plugin helps, and who it doesn't. Crow's Nest is designed to mainly help people who navigate by keyboards on sites that have extensive menus that drop down on hover and focus. Best practice for menu accessibility is to have it drop down by clicking either the primary menu item that has a dropdown, or a drop-down control right next to it. This allows screen reader users, as well as voice-activation users, to navigate the menu. 

Screen reader users are able to benefit from Crow's Nest, but it takes a little bit of effort: they need to disable the virtual cursor in JAWS and NVDA, or the Quick Nav in VoiceOver. It's not a difficult process, but is an additional step that will need to be taken to navigate the menu most easily. We suggest that you include something similar to the following paragraphs in your accessibility statement to let visitors know how to most efficiently navigate your menu:

"While the menu is fully navigable to screen reader users by using the Tab key, or even arrowing through it, it has a considerable number of items spread across several dropdowns. Screen reader users who disable the virtual cursor (NVDA and JAWS), or disable QuickNav (VoiceOver) are able to use the left and right arrow keys on their keyboard to navigate the primary menu items, and the up and down arrow keys to navigate the submenu items. 

To do this, before you navigate into the menu, for JAWS and NVDA, use the keystroke Insert + Z. For VoiceOver, press the left and right arrow keys simultaneously. When navigating the menu, press Enter to go to the selected menu option, or the Escape key at any time to exit into the page. Once out of the menu, make sure to reenable Virtual Cursor by again pressing Insert + Z, or Quick Nav by again pressing the left and right arrow keys simultaneously."

Another case you should consider with your menu is the user who comes to your site on a large tablet. This may have a large enough screen to display your desktop menu, but if your primary menu items are links in addition to dropdown indicators, there may be no way for touch users to make the menu items drop down since tapping on the menu item will take them to that link instead. If you remove the link from the primary item itself, tapping on it should give it focus and thus cause the menu to drop down, though you should test your menu extensively to make sure this is the case. 

In any event, Crow's Nest is not designed to fix every accessibility issue with your menu, but can be helpful for many users. When you are able to undergo a thorough remediation effort on your menu, you should do so. Crow's Nest may benefit many of your users until then. It may even be beneficial after then if your menu remediation does not enable arrow-key navigation.

== Frequently Asked Questions ==
Q: Who does this plugin help?
A: Anyone who navigates your site using a keyboard rather than a mouse or trackpad. This includes people who have reduced mobility, people with faulty mice or disabled trackpads, and people who just prefer to navigate using only their keyboards. 

Q: Will this plugin work if my menu has no dropdowns?
A: Yes! While there is not much advantage to being able to navigate a single-level menu with the arrows rather than just tabbing through it, some people might prefer it, and this plugin enables that just fine. In order for it to work, you should write the same CSS selector in the menu setup screen for both primary and secondary menu items.

Q: Are there any visual instructions to my visitors telling them how to navigate with their arrow keys? I do not see any.
A: By default, the instructions are set to appear just above the menu as a semitransparent message. If your menu is at the very top of the screen, these instructions may be off the top of the screen. You can adjust where these instructions appear by playing around with the "Distance from top" setting. As with any top CSS declarations, be aware that if you want it to appear above the container it's in, you'll need to write a negative number in this field. 

Q: The plugin is not working. How do I get support?
A: Email us at accessibility@seamonsterstudios.com and we'll do all we can to help you out! Use the same address for feature requests or offers to help. We would love to work with you...

== Donations ==
Pick your favorite accessibility nonprofit and make a donation to them. They need it more than we do!