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
    
    


def CreateRedirector(number, path):
    prevRedirector = REDIRECTORPATH + 'Redirector_' + str(5) + '.js'
    redirector = REDIRECTORPATH + 'Redirector_' + str(number) + '.js'
    f = open(prevRedirector, 'r')
    content = f.read()
    word_to_replace = 'Redirector_' + str(number-1)
    replace  = 'Redirector_' + str(number)
    new = content.replace(word_to_replace, replace)
    index = new.find("link:")+len("link:")
    index_after = index + len(' "/revamp"')
    content_before =  new[:index]
    content_after = new[index_after:]
    refined_content = content_before + '"' +path +'"'+ content_after
    fdash= open(redirector, 'w+')
    fdash.write(refined_content)
    fdash.close()    
    

def Modify_ContentJS(number, path):
    f = open(CONTENTPATH, 'r+')
    content = f.read()

    dummyline = " '../BlogPostRedirectors/Redirector_"+str(number-1)+"';"
    red_word= '</Redirector_' + str(number-1) + '>'
    lastindexforcomponent = content.rfind('from') + len(dummyline) + 4
    lastindexforRoute = content.rfind(red_word) + len(red_word)
    content_first = content[:lastindexforcomponent]
    content_middle = content[lastindexforcomponent:lastindexforRoute]
    content_after  = content[lastindexforRoute : ]
    f.close()

    fdash = open(CONTENTPATH, 'w+')
    first_line_to_write = "\nimport Redirector_" + str(number)+ " from '../BlogPostRedirectors/Redirector_"+str(number)+"';\n"
    second_line_to_write = '\n\t\t\t\t\t\t<Redirector_'+str(number)+'></Redirector_'+str(number)+'>\n'
    fdash.write(content_first + first_line_to_write +content_middle + second_line_to_write + content_after)
    fdash.close()  
    
    
    
def CreateBlogJS(number, path):
    
    BLOGSTRING = "import TitleBar from '../TitleBar';\n"+\
    "import Header from '../Header';\n"+\
    "import Footer from '../Footer';\n"+\
    "import ImageComponent from '../ImageComponent';\n\n\n"+\
    "function BlogPost_"+str(number)+"(){\n"+\
        "\t\treturn (\n"+\
        "\t\t\t\t<>\n"+\
            "\t\t\t\t\t<Header></Header>\n"+\
            "\t\t\t\t\t\t<div id='wrapper' className='mx-[200px]'>\n"+\
            "\t\t\t\t\t\t<p className='text-gray-600 prompt'>The quote above tells everything, I guess.....\n"+\
                "\t\t\t\t\t\t\t<br></br>\n"+\
                "\t\t\t\t\t\t\t<br></br>\n"+\
            "\t\t\t\t\t\t\t</p>\n"+\
            "\t\t\t\t\t</div>\n"+\
            "\t\t\t\t\t<Footer></Footer>\n"+\
            "\t\t\t\t</>\n"+\
        "\t\t);\n"+\
    "}\n\n"+\
    "export default BlogPost_"+str(number)+";"
    
    blogpath = 'src\components\BlogPosts\BlogPost_'+str(number)+'.js'
    f = open(blogpath, 'w+')
    f.write(BLOGSTRING)
    f.close()    
    
    
    
def Execute(number,path):
    CreateRedirector(number,path)
    CreateBlogJS(number,path)
    Modify_AppJS(number,path)
    Modify_ContentJS(number,path)


    
          

def main():
    redirector_word = sys.argv[2]
    path = sys.argv[4]
    number = int(redirector_word[11:])
    print('Routing Path defined :',path)
    print('Serial Number of Blog post :', number)
    Execute(number,path)

if __name__ == "__main__":
    main()