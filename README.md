Tech requirements: 
-  Set up a react app (create-react-app works as well). Setup a code linting; 
-  Create tabs component with “My fonts” and “Buy fonts” with information fetched from tabs 
API endpoint. After fetching tabs data - fetch tab content depending on current 
content_enpoint. Under “My fonts” tab there should be the font card listing component with 
the cards. Make card components selectable. Only one card component can be selected at a 
time. Add 50% opacity effect to the selected component. Under the “Buy fonts” tab there 
should be a text centered by both axis. 
-  Use Context API or Redux to remember selected font card and cache responses; 
-  Make sure your whole application is accessible and meets ADA accessibility requirements. The 
users should be able to use your widget with their keyboard and ideally there should also be an 
extra label for color-blind people on each card for the screen readers to read the color name; 
-  Styling: Make it responsive and adaptable using your best judgement. Use “Montserrat” font 
from google fonts. 
API Endpoints: 
-  Tabs: http://json.ffwagency.md/tabs and then fetch each tab content based on the 
content_endpoint from current tab data. 
-  “My Fonts” tab content: http://json.ffwagency.md/fonts_a  
-  “Buy Fonts” tab content: http://json.ffwagency.md/fonts_b 
Evaluation criteria: 
-  Overall project setup; 
-  Code standards / best practices, code linter efficiency; 
-  React component efficiency and reusability. State management; 
-  Handling asynchronous operations safely and efficiently; 
-  Performance; 
-  Accessibility; 
-  Styling, responsiveness and overall quality of the layout 