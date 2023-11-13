import sys
import os


REDIRECTORPATH = './src/BlogPostRedirectors/'
BLOGPATH = './src/components/BlogPosts/'
APPPATH = './src/App.js'
CONTENTPATH = './src/components/Content.js'


def Modify_AppJS(number, path):
    f = open(APPPATH, 'r+')
    content = f.read()
    dummyline = " './components/BlogPosts/BlogPost_"+str(number-1)+"';"
    lastindexforcomponent = content.rfind('from') + len(dummyline) + 4
    lastindexforRoute = content.rfind('</Route>') + len('</Route>')
    content_first = content[:lastindexforcomponent]
    content_middle = content[lastindexforcomponent:lastindexforRoute]
    content_after  = content[lastindexforRoute : ]
    f.close()
    
    fdash = open('./src/App.js', 'w+')
    first_line_to_write = "\nimport BlogPost_" + str(number)+ " from './components/BlogPosts/BlogPost_"+str(number)+"';\n"
    second_line_to_write = '\n\t\t\t\t<Route path="'+path+'" element={<BlogPost_'+str(number)+'></BlogPost_'+str(number)+'>}></Route>\n'
    fdash.write(content_first + first_line_to_write +content_middle + second_line_to_write + content_after)
    fdash.close()    
    

def main():
    # Print command line arguments
    print("Number of arguments:", len(sys.argv))
    print("Argument:", sys.argv[2])
    

if __name__ == "__main__":
    main()